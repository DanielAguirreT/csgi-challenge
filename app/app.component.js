import { retrievePosts, addPost, saveList } from './actions/posts.actions';
import { GetPostsListSelector } from './app.selectors';
import './app.scss';


class AppController {
    constructor($ngRedux, $scope) {
        this.$ngRedux = $ngRedux;
        this.scope = $scope;
        this.post = {};
    }

    $onInit() {
        this.controllerActions = {
            retrievePosts,
            addPost,
            saveList
        };

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {
        console.log({state})
        return {
            postsList: GetPostsListSelector(state),
            notSavedPosts: state.posts.notSavedPosts
        }
    }

    retrievePosts() {
        this.actions.retrievePosts(response => {
            console.log('response:', response);
        });
    }

    handleInputTilte() {
        this.post.title = this.scope.title;
    }

    handlerTextArea() {
        this.post.body = this.scope.body;
    }

    handlerAddPost() {
        this.actions.addPost(this.post);
    }

    saveList() {
        this.loading =true;
        this.actions.saveList(this.state.notSavedPosts)
    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

export default {
    template: require('./app.template.html'),
    controller: AppController
}