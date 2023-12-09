import { FooterHome } from "@/components/footer";
import { MapSergio } from "@/components/mapSergio";
import { NavbarHome } from "@/components/navbar";


export default function home() {
	return <>
		<NavbarHome></NavbarHome>
		<p>hola</p>

		<div style={{width:"100%", height:"200px", backgroundColor:"red"}}>
			<MapSergio></MapSergio>
		</div>
		

		<FooterHome></FooterHome>
	</>;
}

