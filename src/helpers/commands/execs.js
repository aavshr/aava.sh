import ImageOutput from '../../components/output/ImageOutput';
import TxtOutput from '../../components/output/TxtOutput';
import RegularOutput from '../../components/output/RegularOutput';
import Cowsay from 'react-cowsay';

const rickRoll = () => {
    return <ImageOutput src={process.env.PUBLIC_URL + '/rickroll.gif'} alt='rick-roll'/>
}

const cowsay = (args) => {
    if (args.length < 2) {
        return <TxtOutput lines={[`'cowsay' needs an argument. Try 'cowsay "hello".'`]}/>
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