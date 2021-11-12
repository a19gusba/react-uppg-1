function App() {

  function getCityData() {
    var data = { cityName: "City", climateCode: { code: "Af", name: "Tropical rainforest climate Tropical Rainforest", color: "#960000" } }
    return data
  }

  return (
    <div>
      <div className="table-chat-container">
        <WeatherTable data={getCityData()}></WeatherTable>
        <ChatWindow></ChatWindow>
      </div>
    </div>
  );
}