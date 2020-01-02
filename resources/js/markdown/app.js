
import 'codemirror/mode/markdown/markdown'
import 'codemirror/theme/dracula.css'

let mdHalfEditor = {
    template: '<div class="md-half"><div id="markdownEditor" @keyup="preview"></div></div>',
    methods:{
        preview: function () {
            this.$emit('preview',CodeMirrorEditor.getValue())
        }
    }
};
let mdHalfPreview = {
    props: ['md'],
    data: function(){
        return {
            md_html:'<h1>ts</h1>'
        };
    },
    template: '<div class="md-half"> <div id="markdownPreview" v-html="md"></div> </div>',
    watch:{
    }
        
};

window.MdVm = new Vue({
    el: '#mdApp',
    data: {
        md_html:''
    },
    components: {
        'md-half-editor': mdHalfEditor,
        'md-half-preview': mdHalfPreview,
    },
    methods: {
        show: function (md_data) {
                axios.post('/md', {
                    md_data: md_data
                })
                    .then(function (response) {
                        console.log(response.data);
                        MdVm.md_html = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
    },
    mounted: function () {
        window.CodeMirrorEditor = CodeMirror(document.getElementById('markdownEditor'), {
            mode:'markdown',
            theme:'dracula',
            lineNumbers: true
        });
    }
});


