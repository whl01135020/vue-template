<style src="./home.less" lang="less" scoped></style>
<template>
	<div class="home page-body">
		<div class="card">
			<div class="card-title">
				<div class="card-title-item title-icon"></div>
				<div class="card-title-item title-text">概况</div>
				<div class="card-title-item title-link">查看产品信息 ></div>
			</div>
			<div class="card-body">
				<div class="title-lv4">截止昨日</div>
				<div class="">
					<div class="total-number">
						<span class="title-lv4">累计<br/>用户</span>
						<span class="title-lv1 st-blue">1,256.25万</span>
					</div>
				</div>
				<div class="yesterday-number">
					<div class="user-item">
						<div class="title-lv4">昨日新增</div>
						<div class="number">
							<span class="title-lv2 number-item rate-item st-blue">123456</span>
							<span class="title-lv4 number-item rate-height"><span>同比:<span  class="rate-up">+1.5%</span></span><br/><span>环比:<span   class="rate-down">-2.3%</span></span></span>
						</div>
					</div>
					<div class="user-item user-item-border">
						<div class="title-lv4">昨日活跃</div>
						<div class="number">
							<span class="title-lv2 number-item rate-item st-blue">503.35万</span>
							<span class="title-lv4 number-item rate-height"><span>同比:<span  class="rate-up">+1.5%</span></span><br/><span>环比:<span   class="rate-down">-2.3%</span></span></span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card">
			<div class="card-title">
				<div class="card-title-item title-icon"></div>
				<div class="card-title-item title-text">新增占比</div>
				<div class="card-title-item title-link">查看新增详细信息 ></div>
			</div>
			<div class="card-body">
				<div class="title-lv4">本月新增</div>
				<div class="number">

					<span class="title-lv1-small number-item  st-blue"><i class="fa fa-id-card-o color-grey" aria-hidden="true"></i>503.35万</span>
					<span class="title-lv4 number-item rate-height">同比:<span  class="rate-up">+1.5%</span><br/>同比:<span  class="rate-down">-2.3%</span></span>
				</div>
				<div class="data-table">
					<table>
						<tr>
							<th>区域</th>
							<th>新增数</th>
							<th>占比</th>
							<th>同比</th>
							<th>环比</th>
						</tr>
						<tr v-for="item in tableData">
							<td>{{item.name}}</td>
							<td>{{item.theMonth}}</td>
							<td>{{(item.theMonth*100/item.total).toFixed(2)}}%</td>
							<td :class="item.theMonth-item.yearMonth>0?'rate-up':'rate-down'">{{((item.theMonth-item.yearMonth)*100/item.yearMonth).toFixed(2)}}%</td>
							<td :class="item.theMonth-item.preMonth>0?'rate-up':'rate-down'">{{((item.theMonth-item.preMonth)*100/item.preMonth).toFixed(2)}}%</td>
						</tr>
					</table>
				</div>
			</div>
		</div>


		<div class="card">
			<div class="card-title">
				<div class="card-title-item title-icon"></div>
				<div class="card-title-item title-text">核心功能</div>
				<div class="card-title-item title-link">查看核心功能数据 ></div>
			</div>
			<div class="card-body">
				<div class="card-rows">
					<div class="rows-item card-rows-xls-3 line-height-12">
						<div class="title-lv4">视频通话用户占比</div>
						<div class="title-lv2 color-grey"><i class="fa fa-phone st-blue" aria-hidden="true"></i>33.6%</div>
						<div class="title-lv4">同比:<span class=" rate-up">+1.36%</span></div>
						<div class="title-lv4">环比:<span class=" rate-down">-2.16%</span></div>
					</div>
					<div class="rows-item card-rows-xls-3 user-item-border line-height-12">
						<div class="title-lv4">定位时长</div>
						<div class="title-lv2 color-grey"><i class="fa fa-location-arrow st-violet" aria-hidden="true"></i>6.5S</div>
						<div class="title-lv4">同比:<span class=" rate-up">+1.36%</span></div>
						<div class="title-lv4">环比:<span class=" rate-down">-2.16%</span></div>
					</div>
					<div class="rows-item card-rows-xls-3 user-item-border line-height-12">
						<div class="title-lv4">微聊人均发送次数</div>
						<div class="title-lv2 color-grey"><i class="fa  fa-wechat st-green" aria-hidden="true"></i> 3.8</div>
						<div class="title-lv4 ">同比:<span class=" rate-up">+1.36%</span></div>
						<div class="title-lv4">环比:<span class=" rate-down">-2.16%</span></div>
					</div>
				</div>
			</div>
		</div>

	</div>



</template>
<script src="./home.js"></script>