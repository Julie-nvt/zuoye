const attractionsData = {
    taipei: {
        list: ["台北101", "故宮博物院", "象山", "西門町", "士林夜市", "中正紀念堂", "龍山寺", "陽明山", "北投溫泉", "饒河夜市", "松山文創園區", "大安森林公園", "信義商圈", "華山1914文創園區"],
        images: {
            "台北101": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "故宮博物院": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37",
            "象山": "https://images.unsplash.com/photo-1566480863205-4dbee0b2e7e7",
            "西門町": "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
            "士林夜市": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "中正紀念堂": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37",
            "龍山寺": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37",
            "陽明山": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37",
            "北投溫泉": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37",
            "饒河夜市": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "松山文創園區": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37",
            "大安森林公園": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37",
            "信義商圈": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "華山1914文創園區": "https://images.unsplash.com/photo-1591017683236-2d2b56e62f37"
        }
    },
    newtaipei: { 
        list: ["九份老街", "淡水老街", "十分瀑布", "野柳地質公園", "平溪天燈", "漁人碼頭", "鶯歌陶瓷老街", "三峽老街", "黃金博物館", "瑞芳老街", "深坑老街", "林口三井Outlet", "碧潭風景區", "烏來溫泉"],
        images: {
            "九份老街": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "淡水老街": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "十分瀑布": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "野柳地質公園": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "平溪天燈": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "漁人碼頭": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "鶯歌陶瓷老街": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "三峽老街": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "黃金博物館": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "瑞芳老街": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "深坑老街": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "林口三井Outlet": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "碧潭風景區": "https://images.unsplash.com/photo-1549737328-8b9f3252b927",
            "烏來溫泉": "https://images.unsplash.com/photo-1549737328-8b9f3252b927"
        }
    },
    taoyuan: { list: ["大溪老街", "小人國", "石門水庫", "拉拉山", "桃園夜市", "中壢觀光夜市", "慈湖", "角板山", "龍潭大池", "永安漁港", "大園花彩節", "觀音蓮花園", "埔心牧場", "竹圍漁港"] },
    taichung: { list: ["彩虹眷村", "東海大學", "逢甲夜市", "高美濕地", "台中公園", "一中街夜市", "草悟道", "宮原眼科", "大坑風景區", "薰衣草森林", "審計新村", "台中歌劇院", "谷關溫泉", "梨山"] },
    tainan: { list: ["安平古堡", "赤崁樓", "奇美博物館", "花園夜市", "台南孔廟", "億載金城", "神農街", "林百貨", "七股鹽山", "四草綠色隧道", "北門水晶教堂", "關子嶺溫泉", "國華街小吃"] },
    kaohsiung: { list: ["愛河", "西子灣", "旗津島", "蓮池潭", "六合夜市", "駁二藝術特區", "龍虎塔", "美麗島捷運站", "瑞豐夜市", "壽山動物園", "澄清湖", "田寮月世界", "義大世界", "佛光山"] },
    keelung: { list: ["基隆廟口夜市", "和平島公園", "中正公園", "象鼻岩", "忘憂谷", "外木山海灘", "潮境公園", "正濱漁港", "海科館", "仙洞巖", "白米甕炮台", "情人湖", "九份溪步道"] },
    hsinchu: { list: ["十七公里海岸線", "新竹動物園", "城隍廟", "十八尖山", "青草湖", "南寮漁港", "新竹公園", "玻璃工藝博物館", "內灣老街", "北埔老街", "香山濕地", "竹東市場", "綠世界生態農場"] },
    chiayi: { list: ["阿里山", "奮起湖", "檜意森活村", "故宮南院", "北回歸線太陽館", "東石漁港", "布袋漁港", "嘉義公園", "文化路夜市", "瑞里風景區", "竹崎天空走廊", "太平雲梯", "蘭潭風景區"] },
    yilan: { list: ["羅東夜市", "宜蘭文學館", "礁溪溫泉", "冬山河親水公園", "太平山", "南方澳", "蘇澳冷泉", "頭城老街", "蘭陽博物館", "幾米公園", "梅花湖", "棲蘭神木園", "三星蔥文化館"] },
    hualien: { list: ["太魯閣國家公園", "七星潭", "清水斷崖", "東大門夜市", "花蓮海洋公園", "鯉魚潭", "慕谷慕魚", "瑞穗牧場", "六十石山", "秀姑巒溪", "雲山水", "兆豐農場", "光復糖廠"] },
    taitung: { list: ["伯朗大道", "三仙台", "多良車站", "台東森林公園", "鹿野高台", "知本溫泉", "小野柳", "金崙溫泉", "初鹿牧場", "東河包子", "綠島", "蘭嶼", "台東夜市"] },
    penghu: { list: ["跨海大橋", "雙心石滬", "西台古堡", "澎湖天后宮", "七美島", "望安島", "吉貝島", "通樑古榕", "漁翁島燈塔", "大菓葉柱狀玄武岩", "隘門沙灘", "山水沙灘", "風櫃洞"] }
};

const distanceData = {
    taipei: {
        "台北101": {"故宮博物院": 8, "象山": 2, "西門町": 5, "士林夜市": 7},
        "故宮博物院": {"台北101": 8, "象山": 9, "西門町": 6, "士林夜市": 2},
        "象山": {"台北101": 2, "故宮博物院": 9, "西門町": 6, "士林夜市": 8},
        "西門町": {"台北101": 5, "故宮博物院": 6, "象山": 6, "士林夜市": 5},
        "士林夜市": {"台北101": 7, "故宮博物院": 2, "象山": 8, "西門町": 5},
    },
};

const transportSpeeds = {
    "car": 50,      // 汽車 50 km/h
    "public": 40,   // 捷運/公車 40 km/h
    "walk": 5       // 步行 5 km/h
};

const citySelect = document.getElementById('city-select');
const transportSelect = document.getElementById('transport-select');
const attractionsSection = document.getElementById('attractions-section');
const attractionsList = document.getElementById('attractions-list');
const resultDiv = document.getElementById('result');
let selectedAttractions = [];

citySelect.addEventListener('change', function() {
    const city = this.value;
    selectedAttractions = []; // 清空選擇
    resultDiv.innerHTML = ''; // 清空結果
    if (city && attractionsData[city]) {
        displayAttractions(city);
        attractionsSection.style.display = 'block';
    } else {
        attractionsSection.style.display = 'none';
    }
});

function displayAttractions(city) {
    attractionsList.innerHTML = '';
    attractionsData[city].list.forEach(attraction => {
        const div = document.createElement('div');
        div.className = 'checkbox-item';
        div.innerHTML = `
            <input type="checkbox" id="${attraction}" value="${attraction}"
                onchange="updateSelection(this)">
            <label for="${attraction}">${attraction}</label>
        `;
        attractionsList.appendChild(div);
    });
}

function updateSelection(checkbox) {
    const attraction = checkbox.value;
    if (checkbox.checked) {
        if (selectedAttractions.length >= 4) {
            checkbox.checked = false;
            alert('最多只能選擇4個景點！');
            return;
        }
        selectedAttractions.push(attraction);
    } else {
        selectedAttractions = selectedAttractions.filter(a => a !== attraction);
    }
}

function generateItinerary() {
    if (selectedAttractions.length === 0) {
        resultDiv.innerHTML = '<p style="color: red;">請先選擇至少一個景點！</p>';
        return;
    }

    const city = citySelect.value;
    const transport = transportSelect.value;
    const speed = transportSpeeds[transport];
    const attractionTime = 2; // 每個景點停留2小時
    let totalTime = 0;
    let currentTime = 9 * 60; // 從上午9點開始，轉為分鐘計算

    const itinerary = [];
    for (let i = 0; i < selectedAttractions.length; i++) {
        const attraction = selectedAttractions[i];
        const stayDuration = attractionTime * 60;
        const startTime = currentTime;
        const endTime = startTime + stayDuration;

        const imageUrl = attractionsData[city].images && attractionsData[city].images[attraction] 
            ? attractionsData[city].images[attraction] 
            : "https://via.placeholder.com/100";

        itinerary.push({
            attraction: attraction,
            start: formatTime(startTime),
            end: formatTime(endTime),
            image: imageUrl
        });

        totalTime += attractionTime;

        if (i < selectedAttractions.length - 1) {
            const currentAttraction = selectedAttractions[i];
            const nextAttraction = selectedAttractions[i + 1];
            let travelDistance = 0;

            if (distanceData[city] && distanceData[city][currentAttraction] && 
                distanceData[city][currentAttraction][nextAttraction]) {
                travelDistance = distanceData[city][currentAttraction][nextAttraction];
            } else {
                travelDistance = 5; // 默認距離 5 公里
            }

            const travelTime = (travelDistance / speed) * 60; // 交通時間（分鐘）
            totalTime += travelTime / 60; // 累加總時間（小時）
            currentTime = endTime + travelTime;
        }
    }

    resultDiv.innerHTML = `
        <h3>您的行程規劃</h3>
        <p>交通方式：${transportSelect.options[transportSelect.selectedIndex].text}</p>
        <p>總計時間：${totalTime.toFixed(1)}小時</p>
        <ul>
            ${itinerary.map(item => `
                <li>
                    <img src="${item.image}" alt="${item.attraction}">
                    ${item.start} - ${item.end}: ${item.attraction}
                </li>
            `).join('')}
        </ul>
        <p>建議出發時間：上午9:00</p>
        <p>備註：每景點停留2小時，交通時間依據距離與${transportSelect.options[transportSelect.selectedIndex].text}速度估算</p>
    `;
}

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}