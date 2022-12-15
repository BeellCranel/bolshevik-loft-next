import { ComponentMeta, ComponentStory } from '@storybook/react';
import EventCard, { IEventCard } from './EventCard';
import { mockEventCardProps } from './EventCard.mocks';

export default {
  title: 'cards/EventCard',
  component: EventCard,
  argTypes: {},
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => (
  <EventCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockEventCardProps.base,
} as IEventCard;
