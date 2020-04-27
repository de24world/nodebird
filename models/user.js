module.exports = ((sequelize, DataTpyes) => (
    sequelize.define('user', {
        email: {
            type: DataTpyes.STRING(40),
            allowNull: false,
            unique: true,
        },
        nick: {
            type: DataTpyes.STRING(15),
            allowNull: false,
        },
        password: {
            type: DataTpyes.STRING(100),
            allowNull: true,
        },
        provider: {
            type: DataTpyes.STRING(10),
            allowNull: false,
            defaultValue: 'local',
        },
        // local vs kakao

        snsId: {
            type: DataTpyes.STRING(30),
            allowNull: true,
        },
    }, {
        timestamps: true, 
        // 생성일,수정일

        paranoid: true,
        // 삭제일(복구용)
    })
));