import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        tabs: {
          transform(option, node) {
            if (!node.icon) return option;

            return {
              ...option,
              icon: (
                <div className="[&_svg]:size-full rounded-lg size-full max-md:border max-md:p-1.5">
                  {node.icon}
                </div>
              ),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
