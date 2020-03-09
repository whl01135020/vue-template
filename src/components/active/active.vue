<style src="./active.less" lang="less" scoped></style>
<template>
	<div class="active page-body">
		<div class="card">
			<div class="card-title">
				<div class="card-title-item title-icon"></div>
				<div class="card-title-item title-text">活跃数据</div>
				<div class="card-title-item title-link"><select>
					<option value="2020-01">2020-01</option>
					<option value="2020-02">2020-02</option>
				</select></div>
			</div>
			<div class="card-body">
				<div class="current-month">
					<div class="title-lv4">当月活跃</div>
					<div class="number">

						<span class="title-lv1-small number-item"><i class="fa fa-id-card-o color-grey" aria-hidden="true"></i>503.35万</span>
						<span class="title-lv4 number-item rate-height">同比:<span  class="rate-up">+1.5%</span><br/>环比:<span  class="rate-down">-2.3%</span></span>
					</div>
				</div>

				<div class="chart-div">
					<div class="title-lv4">活跃用户</div>
					<div id="modelChart" class="chart-height"></div>
				</div>

				<div class="chart-div">
					<div class="title-lv4">活跃趋势</div>
					<div id="activeTrend" class="chart-height"></div>
				</div>

				<div class="data-table chart-div">
					<div class="title-lv4">各区域活跃详细数据</div>
					<table>
						<tr>
							<th>区域</th>
							<th>活跃数</th>
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
	</div>
</template>
<script src="./active.js"></script>