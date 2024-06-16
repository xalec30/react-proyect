export default function MainContent({children}){
    return(
        <main className="column is-four-fifths has-background-light pb-4">
            {children}
        </main>
    );
}