import { Auction } from "@/database/auctions";

interface auctionMiniProps{
    auction: Auction;
}

export function AuctionMini(props: auctionMiniProps){
    const auction = props.auction;

    return <>
        <h2>{auction.Title}</h2>
        <p>{auction.Description}</p>
    </>;
}



export function AuctionDetailed(props: auctionMiniProps){
    const auction = props.auction;

    return <>
         <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "16px",
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <h2>{auction.Title}</h2>
        <p>{auction.Description}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Precio inicial: {auction.InitialPrice}</p>
          <p>Fecha de cierre: {auction.Deadline.toString()}</p>
        </div>
        <p>{auction.Picture}</p>
      </div>
    </div>

    </>;
}

