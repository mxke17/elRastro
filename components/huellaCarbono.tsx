import { calcularHuellaCarbono } from "@/database/huellaCarbono_ops";


interface Props {
    origen: string;
    destino: string;
  }

export async function HuellaCarbono(props: Props){

    const huella = await calcularHuellaCarbono(props.origen, props.destino);

return <>
<div>
    <p>Huella de carbono(kg): {huella.data.attributes.carbon_kg}</p>

</div>


</>;
}