import { expect, test } from "@playwright/test";

test("conteudo real, links e imagens responsivas", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("#intro")).toHaveCount(0, { timeout: 5000 });
  await expect(
    page.locator("#depoimentos, a[href='#depoimentos']"),
  ).toHaveCount(0);
  await expect(page.locator("img[src*='unsplash']")).toHaveCount(0);
  await expect(page.locator("[data-target='4']")).toHaveText("4");
  await expect(page.locator(".ba")).toHaveCount(10);
  const links = await page
    .locator("a[href*='wa.me']")
    .evaluateAll((anchors) =>
      anchors.map((a) => (a as HTMLAnchorElement).href),
    );
  expect(links.length).toBeGreaterThan(0);
  expect(links.every((url) => new URL(url).pathname === "/556792553098")).toBe(
    true,
  );
  for (const image of await page.locator("main img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate((img: HTMLImageElement) => img.naturalWidth),
    ).toBeGreaterThan(0);
    await expect(image).toHaveAttribute("srcset", /320w/);
    expect(await image.getAttribute("sizes")).toBeTruthy();
  }
  expect(errors).toEqual([]);
});

test("cortina libera o conteudo e o logotipo desaparece suavemente", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/intro-opening/);
  await expect(page.locator(".intro-brand")).toHaveCSS("opacity", "0");
  await expect(page.locator("#intro")).toHaveCount(0);
  await expect(page.locator("h1")).toHaveText(
    "Realce a beleza que já existe em você",
  );
  await page.reload();
  await expect(page.locator("#intro")).toHaveCount(0);
});

test("menu mobile: foco, Escape e mudanca de largura", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("#intro")).toHaveCount(0, { timeout: 5000 });
  const toggle = page.getByRole("button", { name: "Abrir menu" });
  const menu = page.getByRole("dialog", { name: "Menu de navegação" });
  await expect(page.locator("#mobile-menu")).toBeHidden();
  await toggle.click();
  await expect(menu).toBeVisible();
  await expect(
    menu.getByRole("link", { name: "Tratamentos", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.getByRole("button", { name: "Fechar menu" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(menu).toBeHidden();
  await toggle.click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator("#mobile-menu")).toBeHidden();
  expect(
    await page.locator("body").evaluate((el) => el.style.overflow),
  ).not.toBe("hidden");
  expect(
    await page.locator("main").evaluate((el) => (el as HTMLElement).inert),
  ).toBe(false);
});

test("comparador responde ao teclado e FAQ funciona", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const slider = page.locator(".ba-range").first();
  await slider.focus();
  await slider.press("End");
  await expect(slider).toHaveValue("100");
  await expect(slider).toHaveAttribute(
    "aria-valuetext",
    "100% antes, 0% depois",
  );
  expect(
    await page
      .locator(".ba")
      .first()
      .evaluate((el) => getComputedStyle(el).outlineStyle),
  ).toBe("solid");
  const question = page.locator("summary").first();
  await question.click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});

test("sem JavaScript o conteudo e FAQ continuam acessiveis", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4178/");
  await expect(page.locator("#intro")).toBeHidden();
  await expect(page.locator("#inicio p").first()).toBeVisible();
  await expect(page.locator("#resultados")).toBeVisible();
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await context.close();
});

test("falha do modulo nao prende a cortina", async ({ page }) => {
  await page.route("**/*.js", (route) => route.abort());
  await page.goto("/");
  await expect(page.locator("#intro")).toBeHidden({ timeout: 5000 });
  expect(
    await page.locator("html").evaluate((el) => getComputedStyle(el).overflow),
  ).not.toBe("hidden");
});

test("404 sem intro e sem canonical da pagina inicial", async ({ page }) => {
  await page.goto("/404.html");
  await expect(page.locator("#intro")).toHaveCount(0);
  await expect(page.locator("meta[name=robots]")).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await expect(page.locator("link[rel=canonical]")).toHaveCount(0);
  await expect(page.locator("#conteudo")).toBeVisible();
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`layout sem rolagem horizontal em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: false,
    });
    await page.locator("#resultados").evaluate((el) => el.scrollIntoView({ block: "start" }));
    for (const image of await page.locator(".ba img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
    }
    await page.locator("#resultados").evaluate((el) => el.scrollIntoView({ block: "start" }));
    await page.screenshot({ path: `test-results/results-${width}.png` });
  });
}
