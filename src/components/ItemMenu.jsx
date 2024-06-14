export default function ItemMenu(props){

    const setIsActive = () => {

        if(props.isActive == 1){
            return 'category has-text-weight-medium is-active';
        }

        return 'category has-text-weight-medium';
    }

    let classes = setIsActive();

    return(
        <li>
            <a className={classes} href="">{ props.name }</a>
        </li>
    ) 
}