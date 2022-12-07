import StoreCard from "../StoreCard/StoreCard";

const StoreList = ({ stores, sale, loadData }) => {
    return (
        <section className={sale ? 'sale': ''}>
            {stores.map((item) => (
                <StoreCard
                    key={item.id}
                    address={item.address} />
            ))}
            <button onClick={loadData}>
                Load more stores
            </button>
        </section>
    )
}

export default StoreList;