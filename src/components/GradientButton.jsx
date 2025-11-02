function GradientButtons({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="group relative inline-flex items-center justify-center px-6 py-2 font-semibold rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 ease-out hover:scale-105 active:scale-95"
        >
            <span className="absolute inset-0 rounded-xl border-5 border-blue-700 opacity-90
                 group-hover:opacity-100
                 shadow-[0_0_10px_2px_rgba(29,78,216,0.4)]
                 group-hover:shadow-[0_0_20px_6px_rgba(29,78,216,0.6)]
                 transition-all duration-300 ease-out"></span>
            <span className="relative z-10 bg-white rounded-lg px-5 py-2 text-blue-700 group-hover:text-indigo-700 transition-colors">
                {label}
            </span>
        </button>
    )
}

export default GradientButtons