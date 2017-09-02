import React, {Component} from 'react'

class ListContacts extends Component {
  render () {
    console.log('YO')
    return (
      <ol className='contact-list'>
        {this.props.contacts.map(contact => (
          <li key={contact.name} className='contact-list-item'>
            <div className='contact-avatar' style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}/>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <button className='contact-remove'>
                Remove
              </button>
            </div>
          </li>
        )
        )}
      </ol>
    )
  }
}

export default ListContacts
