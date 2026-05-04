import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Stack } from "../Stack";
import { FileUpload } from "./FileUpload";

const meta = {
  title: "Forms/FileUpload",
  component: FileUpload,
  args: {
    label: "Logo del equipo",
    helperText: "PNG o JPG recomendado",
  },
} satisfies Meta<typeof FileUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const InsideForm: Story = {
  render: () => (
    <Card style={{ width: 380 }}>
      <Stack gap={4}>
        <FileUpload label="Logo del equipo" />
        <FileUpload label="Documento de inscripción" />
      </Stack>
    </Card>
  ),
};

export const WithError: Story = {
  args: {
    label: "Logo del equipo",
    error: "Debes subir un archivo",
  },
};