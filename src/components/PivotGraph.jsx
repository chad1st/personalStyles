import {
    LineChart,
    Line,
    Label,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function PivotGraph({ groupStyles }) {
    // Convert your object to array format Recharts needs
    const groupStylesUnsorted = { "D": groupStyles["D"], "I": groupStyles["I"], "S": groupStyles["S"], "A": groupStyles["A"] }
    const typeMap = {
        D: "Driver",
        I: "Influencer",
        S: "Symphatizer",
        A: "Analyzer"
    }

    const data = Object.entries(groupStylesUnsorted).map(([key, value]) => ({
        type: key,
        value,
    }));

    return (
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-4 text-indigo-700">
                Your Personality Styles Graph
            </h2>

            <div className="h-[300px] px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ bottom: 20, right: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="type" stroke="#6b7280">
                            <Label
                                value="Style Type"
                                offset={-5}
                                position="bottom"
                                className="text-gray-700 text-sm"
                            />
                        </XAxis>
                        <YAxis stroke="#6b7280" domain={[0, "auto"]}>
                            <Label
                                value="Score"
                                angle={-90}
                                position="insideLeft"
                                style={{ fill: "#4b5563", fontSize: 14 }}
                            />
                        </YAxis>                        
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-white border border-gray-300 rounded-lg p-2 shadow-md text-sm text-indigo-600">
                                            <p className="font-semibold">{typeMap[label]}</p>
                                            <p>Value: {payload[0].value}</p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#8b5cf6"
                            strokeWidth={3}
                            dot={{ r: 6, fill: "#8b5cf6" }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
