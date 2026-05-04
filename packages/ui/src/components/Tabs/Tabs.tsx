import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import "./Tabs.css";

interface TabsContextValue {
  value?: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used inside <Tabs />");
  }

  return context;
}

export interface TabsProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
}

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  children,
  className = "",
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const currentValue = value ?? internalValue;

  const contextValue = useMemo<TabsContextValue>(
    () => ({
      value: currentValue,
      setValue: (nextValue) => {
        setInternalValue(nextValue);
        onValueChange?.(nextValue);
      },
    }),
    [currentValue, onValueChange],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={`bb-tabs ${className}`} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function TabsList({
  children,
  className = "",
  ...props
}: TabsListProps) {
  return (
    <div className={`bb-tabs__list ${className}`} role="tablist" {...props}>
      {children}
    </div>
  );
}

export interface TabsTriggerProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "value"
> {
  value: string;
  children?: ReactNode;
}

export function TabsTrigger({
  value,
  children,
  className = "",
  type = "button",
  ...props
}: TabsTriggerProps) {
  const { value: selectedValue, setValue } = useTabsContext();
  const isSelected = selectedValue === value;

  return (
    <button
      className={`bb-tabs__trigger ${
        isSelected ? "bb-tabs__trigger--active" : ""
      } ${className}`}
      type={type}
      role="tab"
      aria-selected={isSelected}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children?: ReactNode;
}

export function TabsPanel({
  value,
  children,
  className = "",
  ...props
}: TabsPanelProps) {
  const { value: selectedValue } = useTabsContext();

  if (selectedValue !== value) {
    return null;
  }

  return (
    <div className={`bb-tabs__panel ${className}`} role="tabpanel" {...props}>
      {children}
    </div>
  );
}
