---
hide_table_of_contents: true
---

# 使用 Pendle Pro

Pro 为用户提供完整的 Pendle 功能，让您自由交易收益率并执行任何收益率策略。

用户可以将生息资产存入 Pendle 并铸造 Principal Token (**PT**) 和 Yield Token (**YT**)。PT 代表底层收益代币的本金部份，而 YT 则代表资产直至到期日前产生的**所有**收益的权益。您可以在 Pendle 上交易 PT 和 YT

![Yield splitting](/img/AppGuide/yield_splitting.png "Yield splitting")

在传统金融中，Pendle 所做的类似于债券分离。债券的本金和利息被分离，因此 PT 等效于[零息债券](https://www.investopedia.com/terms/z/zero-couponbond.asp)，而 YT 则是已分离的[息票]((https://www.investopedia.com/terms/c/coupon.asp)) (coupon)。

## 启用 Pendle Pro

要启用 Pendle Pro，请在应用程序右上角按钮切换。

![Simple toggle](/img/AppGuide/simple_toggle.png "Simple toggle")
![Pro toggle](/img/AppGuide/pro_toggle.png "Pro toggle")

如果您是 Pendle 或收益率交易的新手，我们在本节中提供了一个方便的教程，以带您浏览 Pro 界面，并在下一节中为您提供一个简单的指南，让您了解有关收益率交易的基础知识。

## 策略

### 购买 PT

如果您相信资产的收益率将下降，您将希望**对冲您的收益率**。您可以通过购买 PT 来实现这一点。由于保证在到期后得到底层资产，因此当您购买 PT 时，实际上是将您的 APY 锁定在当前的隐含收益率(implied yield)上。另一种看待它的方式是，您正在**将您的收益率固定**为当前的隐含收益率。

例如，如果您以 5% 的隐含收益率购买为期 1 年的 PT-aUSDC，这意味着每个您在 PT 上花费的每1枚 USDC 在到期和赎回时将获得 1.05 USDC。


### 购买 YT

相反，如果您相信资产的收益率将会上升，您将希望**押注在收益率上**。通过购买 YT，您仅为购买利息收益的部份付出，从而增加您对资产收益的敞口，您的回报将由底层APY(underlying APY)的波动决定。

此外，购买 YT 比购买底层资产的资本效率更高，这意味着对于同样的资本，您可以购买更多的 YT 数量，以此来**复合您对收益率的敞口**。

例如，如果 YT 的价格为底层资产价格的 5%，任何底层收益率的上升都将导致您的回报增加 20 倍（因为您能以同样资本购买 20 倍的 YT 单位）


### 提供流动性

如果您相信某项资产的收益率不太可能大幅波动，那么您可以在我们的流动性池中提供流动性(LP)，从交易费用和激励中获得额外的收益。

在Pendle的池子，不因底层资产价格波动而产生无常捐失(IL)风险，因为PT和YT的价格与底层资产的价格相连，即PT + YT = 底层资产。唯一的价格IL风险来自PT和YT需求的波动，这是所有流动性池固有的。

如果持有LP直至到期日，IL会被限制和最小化。这是因为提供的两个资产(PT、SY)在到期时具有完全相同的价值。这样，提供流动性还可以对冲您的任何PT或YT头寸。
