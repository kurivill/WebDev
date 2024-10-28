function MainContent(props) {
    return(
        <main className="kontentti">
            <p>Text1: {props.first}</p>
            <p>Text2: {props.second}</p>
        </main>
    );
}
export default MainContent;