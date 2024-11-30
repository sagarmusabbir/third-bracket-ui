// app/doc/layout.tsx

// import DocSidebar from "@/components/DocSidebar";
// import DocTopbar from "@/components/DocTopBar";

// export default function DocLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-[calc(100vh-73px)]">
//       {/* Mobile Topbar - visible on small screens */}
//       <div className="md:hidden">
//         <DocTopbar />
//       </div>

//       {/* Desktop Layout */}
//       <div className="flex">
//         {/* Sidebar - hidden on mobile, visible on md and up */}
//         <div className="hidden md:block w-64 shrink-0 h-[calc(100vh-73px)] overflow-y-auto sticky top-[73px] border-r dark:border-gray-800/50 border-slate-200/50">
//           <DocSidebar />
//         </div>

//         {/* Main Content */}
//         <main className="flex-1 px-4 py-8 md:px-8 max-w-5xl mx-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

import { sidebarItems } from "@/config/site";
import { Sidebar } from "@/packages/core/src";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-73px)]">
      <div className="flex flex-col lg:flex-row">
        <Sidebar items={sidebarItems} />
        <main className="flex-1 px-4 py-8 md:px-8 max-w-5xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
