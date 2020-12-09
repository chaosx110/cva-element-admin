import type { SetupContext } from "vue";

export interface IIconProps {
  icon: string;
}

export interface ITitleProps {
  title: string;
}

export type IItemProps = IIconProps & ITitleProps;

export const Icon = ({ icon }: IIconProps) => {
  if (icon.includes("el-icon")) {
    return <i class={[icon, "sub-el-icon"]} />;
  }
  return <svg-icon icon-class={icon} />;
};

export const Title = ({ title }: ITitleProps, { slots }: SetupContext) => {
  return <span>{slots.title ? slots.title() : title}</span>;
}

export default {
  components: {Icon, Title},
  setup(props: IItemProps) {
    return [<Icon icon={props.icon} />, <Title title={props.title} />];
  }
}
