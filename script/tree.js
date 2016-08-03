
var myCp = Vue.extend({
    props:['list'],
    template:"<li >"+
                "<span :class='[open?openClass:closeClase,btnClass]' @click.self='openlist'>{{list.id}}</span>"+
                "<ul v-if='list.lists' v-show='open' transition='expand'>"+
                    "<my-component v-for='list in list.lists' :list='list'></my-component>"+
                "</ul>"+
            "</li>",
        data:function(){
            return {
                open: false,
                openClass:'open',
                closeClase:'close',
                btnClass:'item'
            }
        },
        ready:function(){
            this.list.lists || [this.open = true]
        },
        methods:{
            openlist:function(){
                this.list.lists && [this.open = !this.open]
            }
        }
    })

Vue.component('my-component',myCp);


var vm = new Vue({
    data:{
        lists : [
            {id:"ahole",
                lists:[
                    {id:"暴雨"},
                    {id:"暴雨"},
                    {id:"暴雨"
                        ,lists:[
                            {id:'一个人'},
                            {id:'一个人'},
                            {id:'一个人'},
                            {id:'一个人'},
                            {id:'一个人'},
                            {id:'一个人'},
                            {id:'一个人'},
                            {id:'一个人'}
                    ]}
                ]
            },
            {id:"广东",
                lists:[
                    {id:"酷热"},
                    {id:"酷热"},
                    {id:"酷热",
                    lists:[
                        {id:'照睡'},
                        {id:'照睡'},
                        {id:'照睡'},
                        {id:'照睡'},
                        {id:'照睡'},
                        {id:'照睡'},
                        {id:'照睡'},
                        {id:'照睡'}
                        ,{id:"加油",
                            lists:[
                                {id:"编不下去了"},
                                {id:"编不下去了"},
                                {id:"编不下去了"
                                ,lists:[
                                    {id:'陈豪'},
                                    {id:'陈豪'},
                                    {id:'陈豪'},
                                    {id:'陈豪'},
                                    {id:'陈豪'},
                                    {id:'陈豪'},
                                    {id:'陈豪'},
                                    {id:'陈豪'},

                                ]}
                            ]
                        },

                    ]}
                ]
            },
            {id:"ahole",
                lists:[
                    {id:"单身？"},
                    {id:"单身？"},
                    {id:"单身？",lists:[
                        {id:'汪汪'},
                        {id:'汪汪'},
                        {id:'汪汪'},
                        {id:'汪汪'},
                        {id:'汪汪'},
                        {id:'汪汪'},
                        {id:'汪汪'},
                        {id:'汪汪'}
                    ]}
                ]
            },
            {id:"前端"},
            {id:"大四"},
            {id:"where are you"},
            {id:"玩点啥？"}
        ]
    },
    el:'#app'
})
