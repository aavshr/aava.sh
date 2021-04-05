import ImageOutput from '../../components/output/ImageOutput';

const rickRoll = () => {
    return <ImageOutput src={process.env.PUBLIC_URL + '/rickroll.gif'} alt='rick-roll'/>
}

const execs = {
    'rick-roll': rickRoll,
}

export default execs;