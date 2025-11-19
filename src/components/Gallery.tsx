export default function Gallery() {
  
	const collection = document.getElementById("imgCollection");
	if (collection) {
		for (let i = 0; i < 30; i++) {
			collection.innerHTML += `
      <div class="gallery-item">
        <img src="${json.url}"/>
        <div class="item-text">
          <p>${json.date}</p>
          <p>${json.title}</p>
        </div>
      </div>
      `;
			if (i === 29) {
				document.getElementById("imgCollectionLoading").className =
					"hidden";
				collection.className = "";
			}
		}
	}
}
