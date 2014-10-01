kjtest
---
kjtest 是基于karma测试工具+jasmine单元测试框架的fekit插件。使用kjtest的好处只是让用户不用再去install相关的karma插件。至于karma和jasmine相关的测试知识，大家还是要学习的。
因此在使用这个插件前，默认你已经搞清楚了karma的配置，以及jasmine的写法。
如果不懂请到[karma](http://karma-runner.github.io/)官网和[jasmine](http://jasmine.github.io/)官网上查看相关文档，如果对英文不是很有把握那么就到Google或者百度上搜索它们的使用方法。
#安装方式
```
npm install fekit-extension-kjtest -g
```
在国内npm可能不是太好用，所以推荐大家使用[cnpm](https://github.com/cnpm/cnpm).
#使用方式
在使用前，先确保相应项目的根目录下有`karma.conf.js`
```
fekit kjtest
```
然后大家就可以去相应的目录看测试结果了。
