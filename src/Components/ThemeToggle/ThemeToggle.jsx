import Switch from "../ThemeSwitcher/Switch"

export const ThemeToggle = () => {
  return (
    <div className="flex  items-center justify-between">
      <span>Theme </span>
      <span className="self-end">
        <Switch />
      </span>
    </div>
  );
}
