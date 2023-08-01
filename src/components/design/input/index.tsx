import { InfoCircleOutlined } from "@ant-design/icons";
import { ConfigProvider, Input as Inpt } from "antd";

export default function Input(props: InputProps): JSX.Element {
  const {
    placeholder,
    label,
    value,
    defaultValue,
    onChange,
    onPressEnter,
    onSearch,
    allowClear = false,
    addonAfter,
    addonBefore,
    size = "middle",
    type = "text",
    status,
    disabled = false,
    maxLength,
    showCount = false,
    prefix,
    suffix,
    autoSize,
    loading = false,
    showLabel = true,
    error,
    labelColor = "primary",
    required = false,
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
      <div className="w-full my-4 custom-yellow-800  flex flex-col justify-center gap-1">
        {showLabel && (
          <p
            className={` ${
              labelColor == "primary"
                ? " custom-yellow-800"
                : labelColor == "secondary"
                ? " text-white"
                : ""
            }`}
          >
            {label}
          </p>
        )}
        {type === "text" && (
          <Inpt
            required={required}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onPressEnter={onPressEnter}
            allowClear={allowClear}
            addonAfter={addonAfter}
            addonBefore={addonBefore}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
            maxLength={maxLength}
            showCount={showCount}
            prefix={prefix}
            suffix={suffix}
          />
        )}
        {type === "password" && (
          <Inpt.Password
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onPressEnter={onPressEnter}
            allowClear={allowClear}
            addonAfter={addonAfter}
            addonBefore={addonBefore}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
          />
        )}
        {type === "search" && (
          <Inpt.Search
            placeholder={placeholder}
            value={value}
            onSearch={onSearch}
            loading={loading}
            defaultValue={defaultValue}
            onChange={onChange}
            onPressEnter={onPressEnter}
            allowClear={allowClear}
            addonAfter={addonAfter}
            addonBefore={addonBefore}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
            maxLength={maxLength}
            showCount={showCount}
            prefix={prefix}
            suffix={suffix}
          />
        )}
        {type === "textarea" && (
          <Inpt.TextArea
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onPressEnter={onPressEnter}
            size={size}
            status={error ? "error" : status}
            disabled={disabled}
            maxLength={maxLength}
            showCount={showCount}
            autoSize={autoSize}
          />
        )}
        {error && (
          <div className=" text-xs font-light text-red flex items-center gap-1">
            <InfoCircleOutlined />
            <p>{error}</p>
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}
