 export default {
 	name: 'active',
 	data () {
 		return {
 			tableData:[
 			{name:"广州",theMonth:10947,preMonth:7015,yearMonth:14993,total:122199},
 			{name:"杭州",theMonth:7640,preMonth:3658,yearMonth:10487,total:122199},
 			{name:"郑州",theMonth:7516,preMonth:5125,yearMonth:10042,total:122199},
 			{name:"京东",theMonth:7211,preMonth:4065,yearMonth:5140,total:122199},
 			{name:"南京",theMonth:6358,preMonth:3261,yearMonth:9293,total:122199},
 			{name:"胶东",theMonth:5640,preMonth:3024,yearMonth:7400,total:122199},
 			{name:"长沙",theMonth:5218,preMonth:3803,yearMonth:7915,total:122199},
 			{name:"武汉",theMonth:5177,preMonth:3393,yearMonth:7660,total:122199},
 			{name:"鲁西南",theMonth:5021,preMonth:3317,yearMonth:5783,total:122199},
 			{name:"合肥",theMonth:4909,preMonth:2940,yearMonth:6932,total:122199},
 			{name:"成都",theMonth:4253,preMonth:2945,yearMonth:5413,total:122199},
 			{name:"乐其",theMonth:4046,preMonth:3261,yearMonth:4363,total:122199},
 			{name:"石家庄",theMonth:3385,preMonth:2202,yearMonth:3861,total:122199},
 			{name:"福州",theMonth:3228,preMonth:2497,yearMonth:4246,total:122199},
 			{name:"深圳",theMonth:3048,preMonth:2092,yearMonth:3959,total:122199},
 			{name:"沈阳",theMonth:3002,preMonth:1907,yearMonth:3253,total:122199},
 			{name:"南宁",theMonth:2644,preMonth:2007,yearMonth:3243,total:122199},
 			{name:"北京",theMonth:2503,preMonth:1789,yearMonth:3047,total:122199},
 			{name:"哈尔滨",theMonth:2393,preMonth:1588,yearMonth:2714,total:122199},
 			{name:"太原",theMonth:2372,preMonth:1744,yearMonth:2292,total:122199},
 			{name:"西安",theMonth:2263,preMonth:1296,yearMonth:3488,total:122199},
 			{name:"重庆",theMonth:2248,preMonth:1493,yearMonth:2421,total:122199},
 			{name:"内蒙",theMonth:2038,preMonth:508,yearMonth:2229,total:122199},
 			{name:"旗舰店",theMonth:1898,preMonth:1088,yearMonth:1585,total:122199},
 			{name:"南昌",theMonth:1879,preMonth:1089,yearMonth:2249,total:122199},
 			{name:"昆明",theMonth:1657,preMonth:1011,yearMonth:2429,total:122199},
 			{name:"天津",theMonth:1654,preMonth:983,yearMonth:2363,total:122199},
 		
 			],
 			deviceverList:[{devicever:"001",theMonth:41230},
 			{devicever:"002",theMonth:36004},
 			{devicever:"003",theMonth:15163},
 			{devicever:"004",theMonth:12740},
 			{devicever:"005",theMonth:8560},
 			{devicever:"006",theMonth:6455},
 			{devicever:"007",theMonth:1440},
 			{devicever:"008",theMonth:395},
 			{devicever:"A",theMonth:109},
 			{devicever:"B",theMonth:101},
 			{devicever:"C",theMonth:85},
 			{devicever:"D",theMonth:82},
 			{devicever:"E",theMonth:44},
 			{devicever:"F",theMonth:18}],
 			activeData:[{date:"01/01",user:5202},
 			{date:"01/02",user:4810},
 			{date:"01/03",user:5147},
 			{date:"01/04",user:6246},
 			{date:"01/05",user:6912},
 			{date:"01/06",user:4767},
 			{date:"01/07",user:4652},
 			{date:"01/01",user:4737},
 			{date:"01/09",user:4815},
 			{date:"01/10",user:4385},
 			{date:"01/11",user:5417},
 			{date:"01/12",user:6325},
 			{date:"01/13",user:4203},
 			{date:"01/14",user:4214},
 			{date:"01/15",user:4517},
 			{date:"01/16",user:4482},
 			{date:"01/17",user:4925},
 			{date:"01/18",user:5872},
 			{date:"01/19",user:6390},
 			{date:"01/20",user:4604},
 			{date:"01/21",user:4805},
 			{date:"01/22",user:4834},
 			{date:"01/23",user:4915},
 			{date:"01/24",user:5250}]

 		}
 	},
 	methods:{
 		activeModel:function(){

 			let chartInstance = echarts.init(document.getElementById("modelChart"));

 			let xAxis = [];
 			let yseries= [];
 			for(let i in this.deviceverList){
 				let dev  = this.deviceverList[i];
 				xAxis.push(dev.devicever);
 				yseries.push(dev.theMonth);
 			}

 			let option = {
 				color: ['#42AFF0'],
 				title:{
 					show:false,
 					text:'活跃用户',
 					align:'center',
 					textStyle :{
 						fontWeight :'normal',
 						fontSize:14,
 						align:'center'
 					},

 				},
 				tooltip : {
 					trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter:'{b} : {c}',
			        position: function (point, params, dom, rect, size) {
					      // 固定在顶部
					      return [point[0], '10%'];
					  }
					},
					grid: {
						left: '0',
						right: '10',
						bottom: '3%',
						top:10,
						containLabel: true
					},
					xAxis : [
					{
						type : 'category',
						data : xAxis,
						axisTick: {
							show: true,
							inside: true,
							alignWithLabel: true,
							interval: 0,
							lineStyle: {
								color: '#dddddd'
							}
						},
						axisLabel: {
							interval: 0,
							margin: 15,
							textStyle: {
								color: '#8A8A8A',
								fontSize: 10
							},
							rotate: -90,
						},
					}
					],
					yAxis : [
					{
						type : 'value',
						axisLabel: {
							interval: 0,
							textStyle: {
								color: '#8A8A8A',
								fontSize: 10
							}
						},
						max:yseries[0]
					}
					],
					series : [
					{
						name:'活跃数',
						type:'bar',
			    	// barWidth: '60%',
			    	data:yseries
			    }
			    ]
			};

			chartInstance.resize();

			chartInstance.setOption(option);

			setTimeout(function () {

				chartInstance.dispatchAction({
					type: 'showTip',
					  seriesIndex:0 ,//第几条series
					  dataIndex: 0,//第几个tooltip
					});
			},500);
		},
		activeTrend:function(){


			let chartInstance = echarts.init(document.getElementById("activeTrend"));

			let xAxis = [];
			let yseries= [];
			for(let i in this.activeData){
				let dev  = this.activeData[i];
				xAxis.push(dev.date);
				yseries.push(dev.user);
			}

			let option = {
				color: ['#42AFF0'],
				title:{
					show:false,
					text:'各机型活跃用户',
					align:'center',
					textStyle :{
						fontWeight :'normal',
						fontSize:14,
						align:'center'
					},

				},
				tooltip : {
					trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter:'{b} : {c}',
			        position: function (point, params, dom, rect, size) {
					      // 固定在顶部
					      return [point[0], '10%'];
					  }
					},
					grid: {
						left: '0',
						right: '10',
						bottom: '3%',
						top:10,
						containLabel: true
					},
					xAxis : [
					{
						type : 'category',
						data : xAxis,
						boundaryGap: false,
						axisLabel: {
			    		// interval: 0,
			    		textStyle: {
			    			color: '#8A8A8A',
			    			fontSize: 10
			    		},
			    		// rotate: -90,
			    	},
			    }
			    ],
			    yAxis : [
			    {
			    	type : 'value',
			    	axisLabel: {
			    		interval: 0,
			    		textStyle: {
			    			color: '#8A8A8A',
			    			fontSize: 10
			    		}
			    	}
			    }
			    ],
			    series : [
			    {
			    	name:'活跃数',
			    	type:'line',
			    	// barWidth: '60%',
			    	areaStyle: {},
			    	data:yseries,
			    	symbol:'none'
			    }
			    ]
			};

			chartInstance.resize();

			chartInstance.setOption(option);

			setTimeout(function () {

				chartInstance.dispatchAction({
					type: 'showTip',
					  seriesIndex:0 ,//第几条series
					  dataIndex: 0,//第几个tooltip
					});
			},500);
		}
	},
	mounted: function () {
		this.activeModel();
		this.activeTrend();
	}
}