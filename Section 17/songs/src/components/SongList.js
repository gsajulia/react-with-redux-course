// import { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

// My version
const SongList = ({ songs, selectedSong, selectSong }) => {
    return (
        <div className="ui divided list">
            {songs.map((song) => (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button
                                className="ui button primary"
                                style={{background: selectedSong?.title === song.title ? "#ab47bc" : null}}
                                onClick={() => selectSong(song)}
                            >
                                Select
                            </button>
                        </div>

                        <div className="content">{song.title}</div>
                    </div>
                ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { songs: state.songs,
        selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, {
    selectSong,
})(SongList);


// Course version

// class SongList extends Component {
//     renderList() {
//         return this.props.songs.map((song) => {
//             return (
//                 <div className="item" key={song.title}>
//                     <div className="right floated content">
//                         <button
//                             className="ui button primary"
//                             onClick={() => this.props.selectSong(song)}>
//                                 Select
//                         </button>
//                     </div>

//                     <div className="content">{song.title}</div>
//                 </div>
//             );
//         });
//     }

//     render() {
//         return <div className="ui divided list"> {this.renderList()} </div>;
//     }
// }

// const mapStateToProps = (state) => {
//     return { songs: state.songs };
// };

// export default connect(mapStateToProps, {
//     selectSong,
// })(SongList);

