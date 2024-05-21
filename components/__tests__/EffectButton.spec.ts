import { expect, it, describe } from "vitest";
import { screen } from "@testing-library/vue";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import EffectButton from "../EffectButton.vue";

describe("EffectButton", () => {
  // arrange
  const effect = "grayscale";
  const attributes = reactive({ effect: { grayscale: false } });

  it("should render correctly", async () => {
    // arrange
    const buttonLabel = "Grayscale";

    await renderSuspended(EffectButton, {
      slots: { default: () => buttonLabel },
      props: { effect, modelValue: attributes },
    });

    // assert
    expect(screen.getByText(buttonLabel));
  });

  it("should trigger effect on click", async () => {
    // arrange
    const buttonLabel = "Grayscale";

    await renderSuspended(EffectButton, {
      slots: { default: () => buttonLabel },
      props: { effect, modelValue: attributes },
    });

    // act
    screen.getByText(buttonLabel).click();

    // assert
    expect(attributes.effect).toEqual({ [effect]: true });
  });
});
