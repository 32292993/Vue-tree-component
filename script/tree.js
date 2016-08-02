
var myCp = Vue.extend({
    props:['list'],
    template:"<li :class='className' v-on:click.self='openlist'>"+
                "{{list.id}}"+
                "<ul v-if='list.lists' v-show='status'>"+
                    "<my-component v-for='list in list.lists' :list='list'></my-component>"+
                "</ul>"+
            "</li>",
    data:function(){
        return {
            status : false,
            className : ''
        }
    },
    ready:function(){
        if(this.hasLists){
            this.status = false;
            this.className = 'close';
        }else{
            this.status = true;
            this.className = 'open';
        }
    },
    computed:{
        hasLists : function(){
            if(this.list.lists){
                return true;
            }else{
                return false;
            }
        }
    },
    methods:{
        openlist:function(){
            console.log(this.list.lists)
            if(this.list.lists){
                this.status = !this.status;
                this.className = this.status === true ? 'open' : 'close'
            }
        } 
    }
})

Vue.component('my-component',myCp);


var vm = new Vue({
    data:{
        lists : [
            {id:"ahole",
                lists:[
                    {id:"ahole2"},
                    {id:"ahole2"},
                    {id:"ahole2",lists:[
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'}
                    ]}
                ]
            },
            {id:"ahole",
                lists:[
                    {id:"ahole2"},
                    {id:"ahole2"},
                    {id:"ahole2",lists:[
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},{id:"ahole",
                            lists:[
                                {id:"ahole2"},
                                {id:"ahole2"},
                                {id:"ahole2",lists:[
                                    {id:'ahole3'},
                                    {id:'ahole3'},
                                    {id:'ahole3'},
                                    {id:'ahole3'},
                                    {id:'ahole3'},
                                    {id:'ahole3'},
                                    {id:'ahole3'},
                                    {id:'ahole3'},

                                ]}
                            ]
                        },

                    ]}
                ]
            },
            {id:"ahole",
                lists:[
                    {id:"ahole2"},
                    {id:"ahole2"},
                    {id:"ahole2",lists:[
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'},
                        {id:'ahole3'}
                    ]}
                ]
            },
            {id:"ahole"},
            {id:"ahole"},
            {id:"ahole"},
            {id:"ahole"}
        ]
    },
    el:'#app'
})
