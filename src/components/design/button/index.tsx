import { Button as Btn, ConfigProvider } from "antd";

export default function Button(props: BtnProps): JSX.Element {
  const {
    disabled = false,
    ghost = false,
    title,
    loading = false,
    danger = false,
    shape = "default",
    size = "middle",
    block = false,
    type ="primary",
    icon,
    onClick,
  } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff5722",
          colorError: "#FE4D4F",
        },
      }}
    >
      <Btn
        className="flex items-center justify-center "
        style={
          type === "primary" && !ghost ? { background: "#ff5722" } : undefined
        }
        type={type}
        size={size}
        block={block}
        icon={icon}
        onClick={onClick}
        ghost={ghost}
        disabled={disabled}
        loading={loading}
        danger={danger}
        shape={shape}
      >
        {title}
      </Btn>
    </ConfigProvider>
  );
}
