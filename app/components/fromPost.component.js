import { retrievePosts } from './actions/posts.actions';
import { GetPostsListSelector } from './app.selectors';
import './app.scss';


class FormController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.controllerActions = {
            retrievePosts
        };

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });
    }

    mapStateToTarget(state) {}

    handleInputTilte(event) {
        console.log(ewvent.target)

    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

export default {
    template: require('./form.template.html'),
    controller: FormController
}