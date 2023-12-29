
//import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "@/components/Providers";
import { SelectNavbar } from "@/components/selectNavbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    
    <Providers>
      <SelectNavbar></SelectNavbar>
      {children}
    </Providers>
    </>;
}
