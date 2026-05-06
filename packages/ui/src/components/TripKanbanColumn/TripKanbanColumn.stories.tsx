import type { Meta, StoryObj } from "@storybook/react";

import { CardGrid } from "../CardGrid";
import { TripBoardCard } from "../TripBoardCard";
import { TripKanbanColumn } from "./TripKanbanColumn";

const meta: Meta<typeof TripKanbanColumn> = {
  title: "Transport/TripKanbanColumn",
  component: TripKanbanColumn,
};

export default meta;

type Story = StoryObj<typeof TripKanbanColumn>;

export const Default: Story = {
  render: () => (
    <TripKanbanColumn title="Asignados" count={2} tone="info">
      <TripBoardCard
        time="09:00"
        status="assigned"
        originLabel="Hotel VP"
        destinationLabel="La Luz"
        teamName="CB Cabrini"
        passengerCount={12}
      />

      <TripBoardCard
        time="09:30"
        status="assigned"
        originLabel="Estación"
        destinationLabel="Hotel"
        teamName="EASO Basket"
        passengerCount={10}
      />
    </TripKanbanColumn>
  ),
};

export const Board: Story = {
  render: () => (
    <CardGrid columns={3}>
      <TripKanbanColumn title="Pendientes" count={2} tone="warning">
        <TripBoardCard
          time="08:30"
          status="assigned"
          originLabel="Hotel"
          destinationLabel="La Luz"
          teamName="CB Zaragoza"
        />

        <TripBoardCard
          time="09:15"
          status="confirmed"
          originLabel="Estación"
          destinationLabel="Hotel"
          teamName="Las Rozas"
        />
      </TripKanbanColumn>

      <TripKanbanColumn title="En curso" count={1} tone="primary">
        <TripBoardCard
          time="10:00"
          status="in_progress"
          originLabel="Hotel"
          destinationLabel="Columbia"
          teamName="EASO Basket"
          highlighted
        />
      </TripKanbanColumn>

      <TripKanbanColumn title="Finalizados" count={1} tone="success">
        <TripBoardCard
          time="07:45"
          status="completed"
          originLabel="La Luz"
          destinationLabel="Hotel"
          teamName="CB Cabrini"
        />
      </TripKanbanColumn>
    </CardGrid>
  ),
};
