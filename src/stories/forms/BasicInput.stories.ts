import type { Meta, StoryObj } from "@storybook/react";

import BasicInput from "../../components/forms/BasicInput/BasicInput.tsx";

const meta = {
    title: "Example/BasicInput",
    component: BasicInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
