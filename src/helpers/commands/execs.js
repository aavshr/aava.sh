import ImageOutput from '../../components/output/ImageOutput';
import RegularOutput from '../../components/output/RegularOutput';
import Cowsay from 'react-cowsay';

const rickRoll = () => {
    return <ImageOutput src={process.env.PUBLIC_URL + '/rickroll.gif'} alt='rick-roll'/>
}

const cowsay = (args) => {
    if (args.length < 2) {
        return <RegularOutput output={"cowsay: needs an argument"}/>
    }
    return (
        <RegularOutput output={
                <Cowsay text={args.slice(1).join(' ')}/>
            }
        />
    )
}

const execs = {
    'rick-roll': rickRoll,
    'cowsay': cowsay,
}

export default execs;