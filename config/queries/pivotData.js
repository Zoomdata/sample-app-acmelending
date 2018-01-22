export const source = 'Lending Data';
export const queryConfig = {
    tz: 'EST',
    filters: [],
    player: null,
    queryLimit: 2000, // For the new ws API, individual limits don't work if more than 3 groups are specified
                    // so only one single query limit must be used
    time: {
      from: '+2015-01-15 00:00:00.000',
      to: '+2015-06-15 00:00:00.000',
      timeField: 'issue_d'
    },
    groups: [
      {
        name: 'grade',
        sort: {
            dir: 'asc',
            name: 'grade'
        },
        limit: 50
      },
      {
        name: 'loan_status',
        sort: {
            dir: 'asc',
            name: 'loan_status'
        },
        limit: 10
      },
      {
        name: 'addr_state',
        sort: {
            dir: 'asc',
            name: 'addr_state'
        },
        limit: 100
      }
    ],
    metrics: [
           {
            'name': 'calc_o_s_principal',
            'func': 'calc'
          },
          {
            'name': 'calc_o_s',
            'func': 'calc'
          },
          {
            'name': 'calc_portfolio',
            'func': 'calc'
          },
          {
            'name': 'calc_avg_size',
            'func': 'calc'
          }
    ]
};
