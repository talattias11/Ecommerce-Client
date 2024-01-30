import useLocalStorage from "use-local-storage";

const formDefautlData = {
    singer: '',
    actor: ''
};

export default function LocalSorageDemo() {
    const [formData, setFormData] =
        useLocalStorage("form-data", formDefautlData);

    function handleSingerChange(e) {
        const singer = e.target.value;
        setFormData({ ...formData, singer });
    }

    function handleActorChange(e) {
        const actor = e.target.value;
        setFormData({ ...formData, actor });
    }

    return <div className="demo">
        <label htmlFor="singer-input">best singer</label>
        <input id="singer-input" type="text"
            value={formData.singer} onChange={handleSingerChange} />

        <label htmlFor="actor-input">best actor</label>
        <input id="actor-input" type="text"
            value={formData.actor} onChange={handleActorChange} />
    </div>;
}