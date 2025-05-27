
const Page = async ({params}: ParamsWithSearch) => {
    const {id} = await params;

    return (
        <div className="text-2xl font-karla">
            User id: {id}
        </div>
    )
}
export default Page
