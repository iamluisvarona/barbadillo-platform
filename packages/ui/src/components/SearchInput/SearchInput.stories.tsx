import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { Text } from "../Typography";
import { SearchInput } from "./SearchInput";

const meta = {
  title: "Forms/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  args: {
    value: "",
    onChange: () => {},
    placeholder: "Buscar...",
    clearable: true,
  },
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return <SearchInput value={value} onChange={setValue} />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <SearchInput
        value={value}
        onChange={setValue}
        placeholder="Buscar equipos, jugadores..."
      />
    );
  },
};

export const InCard: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Card style={{ width: 360 }}>
        <Stack gap={4}>
          <Text tone="muted">Filtra rápidamente la lista del backoffice.</Text>
          <SearchInput value={value} onChange={setValue} />
        </Stack>
      </Card>
    );
  },
};
