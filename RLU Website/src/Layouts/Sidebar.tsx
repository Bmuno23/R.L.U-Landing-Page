import { Menu } from "lucide-react";

import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="lg:hidden">
      <nav className="h-full flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <Menu /> : <Menu />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 z-20">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-20 ml-3" : "w-0"
            }`}
          ></div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon?: ReactNode;
  text: string;
  alert?: boolean;
  active?: boolean;
  expanded?: boolean;
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("SidebarItem must be used within a Sidebar");
  }
  const { expanded } = context;
  return (
    <li
      className={`relative flex items-center py-2 px-2 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {expanded && <span className={`ml-2 transition-all`}>{text}</span>}{" "}
      {alert && expanded && (
        <div className="absolute right-2 w-2 h-2 rounded bg-indigo-400"></div>
      )}
    </li>
  );
}
