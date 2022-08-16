import { HttpClientModule } from "@angular/common/http";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { RdsIconComponent } from "./rds-icon.component";

export default {
  title: 'Elements/Icon',
  component: RdsIconComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark', 'light'],
      control: { type: 'select' }
    },
    fillColor: {
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark', 'light'],
      control: { type: 'select' }
    },
    fill: {
      options: [ true, false],
      control: { type: 'select' }
    },
    stroke: {
      options: [ true, false],
      control: { type: 'select' }
    },
  },
} as Meta

const Template: Story<RdsIconComponent> = (args: RdsIconComponent) => ({
  props: args,
});

export const Basic = Template.bind({})
Basic.args = {
  name: 'avatar'
}
