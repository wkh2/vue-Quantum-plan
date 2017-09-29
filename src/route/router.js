const Index = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/index/index.vue'));
        },
        'index'
    );
};
const GoSay = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/goSay/goSay'));
        },
        'goSay'
    );
};
const Detail = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/detail/detail.vue'));
        },
        'detail'
    );
};
const GoAnthor = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/goAnthor/goAnthor.vue'));
        },
        'goAnthor'
    );
};
const Assess = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/assess/assess.vue'));
        },
        'assess'
    );
};
const Compontent = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/compontent/compontent.vue'));
        },
        'compontent'
    );
};
const Invite = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/invite/invite.vue'));
        },
        'invite'
    );
};
const InviteDetail = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/inviteDetail/inviteDetail.vue'));
        },
        'inviteDetail'
    );
};
const CompontConfirm = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/compontConfirm/compontConfirm.vue'));
        },
        'compontConfirm'
    );
};
const MyDemand = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/myDemand/myDemand.vue'));
        },
        'myDemand'
    );
};
const Complete = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/complete/complete.vue'));
        },
        'complete'
    );
};
const PlanA = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/planA/planA.vue'));
        },
        'planA'
    );
};
const PinGu = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/pinGu/pinGu.vue'));
        },
        'pinGu'
    );
};
const CompontDetail = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/compontDetail/compontDetail.vue'));
        },
        'CompontDetail'
    );
};
const Review = resolve => {
    require.ensure(
        [],
        () => {
            resolve(require('../pages/review/review.vue'));
        },
        'Review'
    );
};
export default [{
        name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'detail',
        path: '/detail',
        component: Detail
    },
    {
        name: 'goSay',
        path: '/goSay',
        component: GoSay
    },
    {
        name: 'goAnthor',
        path: '/goAnthor',
        component: GoAnthor
    },
    {
        name: 'assess',
        path: '/assess',
        component: Assess
    },
    {
        name: 'compontent',
        path: '/compontent',
        component: Compontent
    },
    {
        name: 'invite',
        path: '/invite',
        component: Invite
    },
    {
        name: 'inviteDetail',
        path: '/inviteDetail',
        component: InviteDetail
    },
    {
        name: 'compontConfirm',
        path: '/compontConfirm',
        component: CompontConfirm
    },
    {
        name: 'myDemand',
        path: '/myDemand',
        component: MyDemand
    },
    {
        name: 'complete',
        path: '/complete',
        component: Complete
    },
    {
        name: 'planA',
        path: '/planA',
        component: PlanA
    },
    {
        name: 'pinGu',
        path: '/pinGu',
        component: PinGu
    },
    {
        name: 'compontDetail',
        path: '/compontDetail',
        component: CompontDetail
    },
    {
        name: 'review',
        path: '/review',
        component: Review
    },
    {
        path: '*',
        redirect: '/'
    }
];