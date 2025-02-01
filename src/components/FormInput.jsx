
export default function FormInput({ label, id, type, placeholder, value, setValue }) {
    return (
        <>
            <div className="flex flex-col gap-[10px]">
                <label htmlFor={id} className="text-[18px]">{label}</label>
                <input type={type} className="w-full px-4 py-3 border outline-[#ee5959] rounded-xl border-black/30" defaultValue={value} onKeyUp={(e) => setValue(e.target.value)} placeholder={placeholder} />
            </div>
        </>
    )
}
