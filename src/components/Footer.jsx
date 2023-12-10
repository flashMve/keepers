

const d = new Date();
let year = d.getFullYear();

function Footer(){
    return(
        <footer>
            <p> {year} &copy; Copy Rights </p>
        </footer>
    );
}

export default Footer;