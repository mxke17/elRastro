import { calcularHuellaCarbono } from "@/database/huellaCarbono_ops";
import { ObjectId } from "mongodb";


interface huellaProps {
    origen: string | undefined;
    destino: string;
  }

export async function HuellaCarbono(props: huellaProps){

    if(props.origen && ObjectId.isValid(props.origen)){

    const huella = await calcularHuellaCarbono(props.origen, props.destino);

return <>
<div>
    <p>Huella de carbono(kg): {huella.data.attributes.carbon_kg}</p>
</div>
</>;
}
return <></>;
}